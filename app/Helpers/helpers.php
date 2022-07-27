<?php

use Illuminate\Support\Facades\Storage;

function upload($storage,$file,$path,$file_name)
{
    Storage::disk($storage)->putFileAs(
        $path,
        $file,
        $file_name
    );
    $img = Image::make(storage_path('app/' . $path . $file_name));
    $img->save(storage_path('app/' . $path . $file_name), 50);
}

function deleteFile($storage,$path,$file){
    Storage::disk($storage)->delete($path.$file);
}
