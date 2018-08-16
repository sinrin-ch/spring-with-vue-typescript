package xyz.sinrin.demo.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by sinrin on 2018/8/16.
 */
@RestController
public class UserController
{
	@PostMapping("/api/user/login")
	public String login(String username, String password)
	{
		if ("admin".equals(username) && "123".equals(password))
		{
			return "success";
		}
		return "fail";
	}
}
