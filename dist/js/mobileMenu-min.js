"use strict";function toggleMenu(){navMenu.classList.contains("active")?(navMenu.classList.remove("active"),navMenu.setAttribute("aria-expanded","false")):(navMenu.classList.add("active"),navMenu.setAttribute("aria-expanded","true"))}var navMenu=$(".nav-menu"),navMenuToggle=$(".nav-menu-toggle");navMenuToggle.addEventListener("click",toggleMenu);