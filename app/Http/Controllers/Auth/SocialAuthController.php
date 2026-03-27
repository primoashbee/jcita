<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Laravel\Socialite\Facades\Socialite;

class SocialAuthController extends Controller
{
    public function redirect(string $provider): \Symfony\Component\HttpFoundation\RedirectResponse|\Illuminate\Http\RedirectResponse
    {
        $this->validateProvider($provider);

        return Socialite::driver($provider)->stateless()->redirect();
    }

    public function callback(string $provider): \Illuminate\Http\RedirectResponse
    {
        $this->validateProvider($provider);

        $frontendUrl = config('app.frontend_url', 'http://localhost:3000');

        try {
            $socialUser = Socialite::driver($provider)->stateless()->user();
        } catch (\Exception $e) {
            return redirect("{$frontendUrl}/auth/login?error=oauth_failed");
        }

        $user = User::where('social_provider', $provider)
            ->where('social_id', $socialUser->getId())
            ->first();

        if (! $user) {
            $user = User::where('email', $socialUser->getEmail())->first();

            if ($user) {
                $user->update([
                    'social_provider' => $provider,
                    'social_id'       => $socialUser->getId(),
                    'avatar'          => $socialUser->getAvatar(),
                ]);
            } else {
                $user = User::create([
                    'name'            => $socialUser->getName() ?? $socialUser->getNickname() ?? 'User',
                    'email'           => $socialUser->getEmail(),
                    'password'        => Hash::make(Str::random(32)),
                    'social_provider' => $provider,
                    'social_id'       => $socialUser->getId(),
                    'avatar'          => $socialUser->getAvatar(),
                ]);
            }
        }

        $token = $user->createToken('auth_token')->plainTextToken;

        return redirect("{$frontendUrl}/auth/callback?token={$token}");
    }

    private function validateProvider(string $provider): void
    {
        if (! in_array($provider, ['google', 'facebook'])) {
            abort(404, 'OAuth provider not supported.');
        }
    }
}
