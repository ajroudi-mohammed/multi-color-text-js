var multiColor = {
    init: function(options){
        this.options = options;
        this.element = document.getElementById(this.options.elementID);
        this.element.innerHTML += '<span style="position:absolute;top:0;left:0;overflow:hidden;width:100%;height:' + this.options.height + ';color:' + this.options.color + ';">' + this.element.innerHTML + '</span>';
        this.element.style.position = 'relative';
    }
}