<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Menu as MenuModel;

class Menu extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        MenuModel::create([
            'title' => 'Home Admin',
            'url' => '/',
            'route' => 'view-home',
            'head_id' =>  null,
            'guard' => 'admin',
            'icon' => 'HomeIcon'
        ]);
        MenuModel::create([
            'title' => 'Second Page',
            'url' => '/second-page',
            'route' => 'view-second-page',
            'head_id' =>  null,
            'guard' => 'admin',
            'icon' => 'FileIcon'
        ]);
        $admin_setting = MenuModel::create([
            'title' => 'Setting',
            'url' => null,
            'route' => null,
            'head_id' =>  null,
            'guard' => 'admin',
            'icon' => 'SettingsIcon'
        ]);
        MenuModel::create([
            'title' => 'Users',
            'url' => '/users',
            'route' => 'view-users',
            'head_id' =>  $admin_setting->id,
            'guard' => 'admin',
            'icon' => null
        ]);
        MenuModel::create([
            'title' => 'Roles',
            'url' => '/roles',
            'route' => 'view-roles',
            'head_id' =>  $admin_setting->id,
            'guard' => 'admin',
            'icon' => null
        ]);
        MenuModel::create([
            'title' => 'General',
            'url' => '/general-setting',
            'route' => 'view-general-setting',
            'head_id' =>  $admin_setting->id,
            'guard' => 'admin',
            'icon' => null
        ]);

        MenuModel::create([
            'title' => 'Home Client',
            'url' => '/',
            'route' => 'view-home',
            'head_id' =>  null,
            'guard' => 'client',
            'icon' => 'HomeIcon'
        ]);
        MenuModel::create([
            'title' => 'Second Page',
            'url' => '/second-page',
            'route' => 'view-second-page',
            'head_id' =>  null,
            'guard' => 'client',
            'icon' => 'FileIcon'
        ]);
        $client_setting = MenuModel::create([
            'title' => 'Setting',
            'url' => null,
            'route' => null,
            'head_id' =>  null,
            'guard' => 'client',
            'icon' => 'SettingsIcon'
        ]);
        MenuModel::create([
            'title' => 'Personal',
            'url' => '/personal-setting',
            'route' => 'view-personal-setting',
            'head_id' =>  $client_setting->id,
            'guard' => 'client',
            'icon' => null
        ]);
    }
}
