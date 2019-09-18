package com.tts.demo.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import sun.misc.Contended;

import javax.print.DocFlavor;

@Controller
public class HelloController {
    @GetMapping("/hello") //that tells Spring to connect that URL (/hello) to this method.
    public String sayHello(
            @RequestParam(required = false, defaultValue = "World") String name, Model model) {
        model.addAttribute("user", name);
        return "hello";
    }
}
