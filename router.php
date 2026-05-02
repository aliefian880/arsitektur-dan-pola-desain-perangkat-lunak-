<?php

class Router {

    protected $routes = [];

    // Tambah route
    public function add($route, $params = []) {
        $this->routes[$route] = $params;
    }

    // Jalankan route
    public function dispatch($url) {

        $url = trim($url, '/');

        foreach ($this->routes as $route => $params) {

            $routePattern = preg_replace('/\//', '\\/', $route);
            $routePattern = '/^' . $routePattern . '$/i';

            if (preg_match($routePattern, $url)) {

                $controller = $params['controller'];
                $action     = $params['action'];

                require_once "app/controllers/$controller.php";

                $controllerObj = new $controller();

                if (method_exists($controllerObj, $action)) {
                    call_user_func([$controllerObj, $action]);
                    return;
                } else {
                    echo "Method tidak ditemukan!";
                    return;
                }
            }
        }

        echo "404 - Halaman tidak ditemukan!";
    }
}