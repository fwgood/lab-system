package com.chrome.api.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
@RequestMapping("/a")
@RestController
public class HelloController {

    @GetMapping("/helloworld")
    public void hello() {
        System.out.println(1);
    }
}
