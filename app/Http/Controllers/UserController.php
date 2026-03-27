<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\JsonResponse;

class UserController extends Controller
{
    public function index(): JsonResponse
    {
        $users = User::select('id', 'name', 'email', 'avatar', 'social_provider', 'created_at')
            ->orderBy('created_at', 'desc')
            ->get();

        return response()->json($users);
    }
}
