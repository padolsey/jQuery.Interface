## jQuery.Interface

Dead simple:

    function Foo() {
        this.name = 'foo';
        this.setDOM('<div></div>');
    }

    Foo.prototype = new jQuery.Interface;

    // Foo sub-classes jQuery, so:
    var f = new Foo;
    f.css('color', 'red').appendTo('body');
    f.name; // => "foo"
    f[0]; // => <div style="color: red;">

`setDOM` can be passed anything that you would usually pass to `jQuery(...)`.

