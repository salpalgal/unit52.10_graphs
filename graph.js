class Node {
  constructor(value, adjacent = new Set()) {
    this.value = value;
    this.adjacent = adjacent;
  }
}

class Graph {
  constructor() {
    this.nodes = new Set();
  }

  // this function accepts a Node instance and adds it to the nodes property on the graph
  addVertex(vertex) {
    this.nodes.add(vertex)
  }

  // this function accepts an array of Node instances and adds them to the nodes property on the graph
  addVertices(vertexArray) {
    for(let ver of vertexArray){
      this.addVertex(ver)
    }
  }

  // this function accepts two vertices and updates their adjacent values to include the other vertex
  addEdge(v1, v2) {
    v1.adjacent.add(v2);
    v2.adjacent.add(v1)
  }

  // this function accepts two vertices and updates their adjacent values to remove the other vertex
  removeEdge(v1, v2) {
    for(let v of v1.adjacent){
      if(v===v2){
        v1.adjacent.delete(v)
      }
    }
    for(let v of v2.adjacent){
      if(v===v1){
        v2.adjacent.delete(v)
      }
    }
  }

  // this function accepts a vertex and removes it from the nodes property, it also updates any adjacency lists that include that vertex
  removeVertex(vertex) {
    for(let v of this.nodes){
      if(v===vertex){
        this.nodes.delete(v)
      }
    }
    for(let v of this.nodes){
      this.removeEdge(v,vertex)
    }
  }

  // this function returns an array of Node values using DFS
  depthFirstSearch(start) {
    let stack =[start];
    let seen = new Set(stack);
    let arr =[];
    while(stack.length>0){
      let current = stack.pop()
      arr.push(current.value)
      for(let neighbour of current.adjacent){
        if(!seen.has(neighbour)){
    
          stack.push(neighbour)
          seen.add(neighbour)
          
        }
      }
    }
    return arr

  }

  // this function returns an array of Node values using BFS
  breadthFirstSearch(start) {
    let queue =[start];
    let seen = new Set(queue);
    let arr =[];
    while(queue.length>0){
      let current = queue.shift()
      arr.push(current.value)
      for(let neighbour of current.adjacent){
        if(!seen.has(neighbour)){
    
          queue.push(neighbour)
          seen.add(neighbour)
          
        }
      }
    }
    return arr
  }
}

module.exports = {Graph, Node}