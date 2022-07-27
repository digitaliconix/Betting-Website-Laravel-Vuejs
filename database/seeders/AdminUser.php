<?php

namespace Database\Seeders;

use App\Models\Admin;
use Illuminate\Database\Seeder;

class AdminUser extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Admin::create([
           'name' => 'Admin',
           'email' => 'admin@demo.com',
           'password' => 'admin'
        ]);
        Admin::create([
            'name' => 'Manager',
            'email' => 'manager@demo.com',
            'password' => 'manager'
        ]);
    }
}
