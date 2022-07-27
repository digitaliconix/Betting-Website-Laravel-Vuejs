<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
            AdminUser::class,
            ClientUser::class,
            Menu::class,
            Permission::class,
            Role::class,
            RoleHasPermission::class,
            ModelHasRole::class
        ]);
    }
}
