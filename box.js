class Box{
    var options = {
        isStatic:true
    }
    this.body = Bodies.rectangle(200,100, 50,50, options);
    World.add(World, this.body)
}

diplay(){
   var pos = this.body.position 
}