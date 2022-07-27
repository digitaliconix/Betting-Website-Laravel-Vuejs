<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ModelHasRole extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('model_has_roles')->insert([
            'role_id' => 1,
            'model_type' => 'App\Models\Admin',
            'model_id' => 1
        ]);
        DB::table('model_has_roles')->insert([
            'role_id' => 2,
            'model_type' => 'App\Models\Admin',
            'model_id' => 2
        ]);

        DB::table('model_has_roles')->insert([
            'role_id' => 4,
            'model_type' => 'App\Models\Client',
            'model_id' => 1
        ]);
    }
}
