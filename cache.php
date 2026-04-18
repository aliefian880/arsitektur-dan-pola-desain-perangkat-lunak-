<?php

class Cache {

    private static $cachePath = __DIR__ . '/../storage/cache/';

    // Simpan cache
    public static function set($key, $data, $ttl = 60) {
        if (!file_exists(self::$cachePath)) {
            mkdir(self::$cachePath, 0777, true);
        }

        $file = self::$cachePath . md5($key) . '.cache';

        $cacheData = [
            'expired' => time() + $ttl,
            'data'    => $data
        ];

        file_put_contents($file, serialize($cacheData));
    }

    // Ambil cache
    public static function get($key) {
        $file = self::$cachePath . md5($key) . '.cache';

        if (!file_exists($file)) {
            return false;
        }

        $cacheData = unserialize(file_get_contents($file));

        if ($cacheData['expired'] < time()) {
            unlink($file);
            return false;
        }

        return $cacheData['data'];
    }

    // Hapus cache
    public static function delete($key) {
        $file = self::$cachePath . md5($key) . '.cache';
        if (file_exists($file)) {
            unlink($file);
        }
    }
}