package xyz.sinrin.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import xyz.sinrin.demo.model.UserVO;

@Controller
public class HelloController {

    @GetMapping("/hello")
    public String hello(){
        return "hello";
    }

    @GetMapping("/1")
    public String t1(){
	    final UserVO user = new UserVO();
        user.setAge(11);
	    return "/WEB-INF/jsp/1.jsp";
    }
    @GetMapping("/api/msg")
    @ResponseBody
    public String msg(){
        return "msg";
    }
}
