<?php

use App\Http\Controllers\PushSubscriptionController;
use Illuminate\Support\Facades\Route;

Route::post('/push/subscribe', [PushSubscriptionController::class, 'subscribe']);
Route::post('/push/unsubscribe', [PushSubscriptionController::class, 'unsubscribe']);
Route::post('/push/send', [PushSubscriptionController::class, 'sendNotification']);
Route::get('/push/vapid-public-key', [PushSubscriptionController::class, 'vapidPublicKey']);
