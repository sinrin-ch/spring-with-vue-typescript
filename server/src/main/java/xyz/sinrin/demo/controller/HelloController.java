package xyz.sinrin.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class HelloController {

    @GetMapping("/hello")
    public String hello(){
        return "hello";
    }

    @GetMapping("/1")
    public String t1(){
    	return "1";
    }
    @GetMapping("/api/msg")
    @ResponseBody
    public String msg(){
        return "msg";
    }
}
