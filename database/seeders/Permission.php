<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class Permission extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('permissions')->insert([
            'name' => 'view-home',
            'guard_name' => 'admin',
        ]);
        DB::table('permissions')->insert([
            'name' => 'view-second-page',
            'guard_name' => 'admin',
        ]);
        DB::table('permissions')->insert([
            'name' => 'view-users',
            'guard_name' => 'admin',
        ]);
        DB::table('permissions')->insert([
            'name' => 'view-roles',
            'guard_name' => 'admin',
        ]);
        DB::table('permissions')->insert([
            'name' => 'view-general-setting',
            'guard_name' => 'admin',
        ]);
        DB::table('permissions')->insert([
            'name' => 'create-roles',
            'guard_name' => 'admin',
        ]);
        DB::table('permissions')->insert([
            'name' => 'edit-roles',
            'guard_name' => 'admin',
        ]);
        DB::table('permissions')->insert([
            'name' => 'create-users',
            'guard_name' => 'admin',
        ]);
        DB::table('permissions')->insert([
            'name' => 'edit-users',
            'guard_name' => 'admin',
        ]);

        DB::table('permissions')->insert([
            'name' => 'view-home',
            'guard_name' => 'client',
        ]);
        DB::table('permissions')->insert([
            'name' => 'view-second-page',
            'guard_name' => 'client',
        ]);
        DB::table('permissions')->insert([
            'name' => 'view-personal-setting',
            'guard_name' => 'client',
        ]);




    }
}
