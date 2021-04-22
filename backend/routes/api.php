<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\BooksController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });


Route::group([
    
    'middleware' => 'apiJwt'
    // 'namespace' => 'App\Http\Controllers',
    // 'prefix' => 'auth'
    
], function () {
    Route::get('users', [UserController::class,'index']);
    Route::post('logout', [AuthController::class, 'logout']);
    Route::get('books', [BooksController::class,'index']);
});

Route::post('books/add', [BooksController::class,'store']);
Route::put('checkbook', [BooksController::class,'checkBook']);
Route::post('register', [UserController::class,'store']);
Route::post('login', [AuthController::class, 'login']);