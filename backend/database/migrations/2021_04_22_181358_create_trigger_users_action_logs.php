<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class CreateTriggerUsersActionLogs extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('trigger_users_action_logs', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
        });

        DB::unprepared('DROP TRIGGER IF EXISTS trigger_users_action_logs');
        DB::unprepared('CREATE TRIGGER users_action_logs_AFTER_UPDATE AFTER UPDATE ON `books` 
            FOR EACH ROW
                BEGIN
                    INSERT INTO user_action_logs (books_id, status)  VALUES (OLD.id, OLD.status) ;
                END
        ');
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('trigger_users_action_logs');
    }
}
