(function(e){e(document).on({mouseenter:function(){e(this).text("Unfollow")},mouseleave:function(){e(this).text("Following")}},"[data-behavior~=unfollow-user]"),e("[data-behavior~=toggle-site-links]").on("click",function(t){t.preventDefault(),e(".user-menu-dropdown.site-links").toggleClass("is-in-view"),e(".user-menu-dropdown:not(.site-links)").removeClass("is-in-view")}),e("[data-behavior~=toggle-user-alerts]").on("click",function(t){t.preventDefault(),e(".user-menu-dropdown.user-alerts").toggleClass("is-in-view"),e(".user-menu-dropdown:not(.user-alerts)").removeClass("is-in-view")}),e("[data-behavior~=toggle-user-links]").on("click",function(t){t.preventDefault(),e(".user-menu-dropdown.user-links").toggleClass("is-in-view"),e(".user-menu-dropdown:not(.user-links)").removeClass("is-in-view")}),e(document).on("click",function(t){e(t.target).closest(".user-menu").length||e(".user-menu .user-menu-dropdown").removeClass("is-in-view")}),e("body").keydown(function(t){t.which==27&&e(".user-menu-dropdown").hasClass("is-in-view")&&e(".user-menu-dropdown").removeClass("is-in-view")})})(jQuery);