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

        $driver = Socialite::driver($provider)->stateless();

        if ($provider === 'facebook') {
            $driver->scopes(['public_profile']);
        }

        return $driver->redirect();
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

        $socialId    = $socialUser->getId();
        $socialEmail = $socialUser->getEmail();

        $user = User::where('social_provider', $provider)
            ->where('social_id', $socialId)
            ->first();

        if (! $user && $socialEmail) {
            $user = User::where('email', $socialEmail)->first();
            if ($user) {
                $user->update([
                    'social_provider' => $provider,
                    'social_id'       => $socialId,
                    'avatar'          => $socialUser->getAvatar(),
                ]);
            }
        }

        if (! $user) {
            $user = User::create([
                'name'            => $socialUser->getName() ?? $socialUser->getNickname() ?? 'User',
                'email'           => $socialEmail ?? "{$socialId}@{$provider}.social",
                'password'        => Hash::make(Str::random(32)),
                'social_provider' => $provider,
                'social_id'       => $socialId,
                'avatar'          => $socialUser->getAvatar(),
            ]);
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
