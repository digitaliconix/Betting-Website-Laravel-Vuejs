<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class Role extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('roles')->insert([
            'name' => 'Super Admin',
            'guard_name' => 'admin',
        ]);
        DB::table('roles')->insert([
            'name' => 'Manager',
            'guard_name' => 'admin',
        ]);
        DB::table('roles')->insert([
            'name' => 'Supervisor',
            'guard_name' => 'admin',
        ]);

        DB::table('roles')->insert([
            'name' => 'Admin',
            'guard_name' => 'client',
        ]);

    }
}
