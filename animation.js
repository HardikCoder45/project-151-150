
  AFRAME.registerComponent('move-train',{
    schema:{
        MoveX:{type:'number',default:1 }
    },
    
    tick:
function press(){
this.data.MoveX = this.data.MoveX - 0.1
var pos = this.el.getAttribute('position')
pos.z = this.data.MoveX
 
this.el.setAttribute("position",{x:pos.x,y:pos.y,z:pos.z})

 }
    
})