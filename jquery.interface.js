/*
* jQuery.Interface 0.1
* --
* https://github.com/jamespadolsey/jQuery.Interface
* --
* This program is free software. It comes without any warranty, to
* the extent permitted by applicable law. You can redistribute it
* and/or modify it under the terms of the Do What The Fuck You Want
* To Public License, Version 2, as published by Sam Hocevar. See
* http://sam.zoy.org/wtfpl/COPYING for more details. */ 

jQuery.Interface = (function(){

    function JQInterface() {}

    JQInterface.fn = JQInterface.prototype = jQuery([]);
    JQInterface.prototype.fn = JQInterface.fn;

    JQInterface.prototype.setDOM = function(s, c) {

        var jq = jQuery(s, c);

        for (var l = this.length = jq.length; l--;) {
            this[l] = jq[l];
        }

    };

    JQInterface.prototype.pushStack = function() {

        var ret = jQuery.fn.pushStack.apply(this, arguments),
            l = ret.length,
            same = true;
            
        // If all elements within the returned jQ obj are the
        // same then we can return `this` (sub class instance)
        // Otherwise, just return the jQ obj

        while (same && l--) {
            same = same && this[l] === ret[l];
        }

        return same ? this : ret;

    };

    return JQInterface;

}());