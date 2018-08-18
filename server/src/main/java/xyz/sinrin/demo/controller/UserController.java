package xyz.sinrin.demo.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import xyz.sinrin.demo.model.UserVO;

import javax.servlet.http.HttpSession;

/**
 * Created by sinrin on 2018/8/16.
 */
@RestController
public class UserController {
    @PostMapping("/api/user/login")
    public ResponseEntity<UserVO> login(String username, String password, HttpSession session) {
        if ("admin".equals(username) && "123".equals(password)) {
            final UserVO loginUser = new UserVO() {{
                setName("admin");
                setAge(16);
                setId(1);
            }};
            session.setAttribute("loginUser",loginUser);
            return new ResponseEntity<>(loginUser, HttpStatus.OK);
        }
        session.removeAttribute("loginUser");
        return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
    }
}
