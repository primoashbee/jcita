<?php

use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\Auth\SocialAuthController;
use App\Http\Controllers\PushSubscriptionController;
use Illuminate\Support\Facades\Route;

// Social OAuth routes (under /api so Nginx routes them to Laravel)
Route::prefix('auth')->group(function () {
    Route::get('/{provider}/redirect', [SocialAuthController::class, 'redirect']);
    Route::get('/{provider}/callback', [SocialAuthController::class, 'callback']);
});

// Auth routes
Route::prefix('auth')->group(function () {
    Route::post('/register', [AuthController::class, 'register']);
    Route::post('/login', [AuthController::class, 'login']);

    Route::middleware('auth:sanctum')->group(function () {
        Route::post('/logout', [AuthController::class, 'logout']);
        Route::get('/user', [AuthController::class, 'user']);
    });
});

// Push notification routes
Route::post('/push/subscribe', [PushSubscriptionController::class, 'subscribe']);
Route::post('/push/unsubscribe', [PushSubscriptionController::class, 'unsubscribe']);
Route::post('/push/send', [PushSubscriptionController::class, 'sendNotification']);
Route::get('/push/vapid-public-key', [PushSubscriptionController::class, 'vapidPublicKey']);
