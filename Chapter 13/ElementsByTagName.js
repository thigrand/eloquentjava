// The getElementsByTagName method returns all child elements with a given tag name. Implement your own version of it as a 
// regular nonmethod function that takes a node and a string (the tag name) as arguments and returns an array containing 
// all descendant element nodes with the given tag name.

// To find the tag name of an element, use its tagName property. But note that this will return the tag name in all uppercase. 
// Use the toLowerCase or toUpperCase string method to compensate for this.

// The solution is most easily expressed with a recursive function, similar to the talksAbout function defined earlier in this chapter.

// You could call byTagname itself recursively, concatenating the resulting arrays to produce the output. For a more efficient approach, 
// define an inner function that calls itself recursively and that has access to an array variable defined in the outer function to which 
// it can add the matching elements it finds. Don’t forget to call the inner function once from the outer function.

// The recursive function must check the node type. Here we are interested only in node type 1 (document.ELEMENT_NODE). For such nodes, 
// we must loop over their children and, for each child, see whether the child matches the query while also doing a recursive call on it 
// to inspect its own children.


/*
    !!! Nie działa, do sprawdzenia !!!
*/

<h1>Heading with a <span>span</span> element.</h1>
<p>A paragraph with <span>one</span>, <span>two</span>
  spans.</p>

<script>
    function byTagName(node, tagName) {
    // Your code here.
      var arrayElem = []
      
      //for (var j = 0; j < node.childNodes.length;j++) {
      function check(node) {

        for (var i = 0; i < node.childNodes.length; i++) {
          var allNodes = node.childNodes[i];  
          var type = allNodes.nodeType
          if(type == document.ELEMENT_NODE) {  //sprawdzenie czy node jest elementem
            if(type.toLowerCase == tagName) {
              arrayElem.push(allNodes);
            }
            check(allNodes);
          }
        }
      }
      check(node);
      return arrayElem;
    };

  console.log(byTagName(document.body, "h1").length);
  // → 1
  console.log(byTagName(document.body, "span").length);
  // → 3
  var para = document.querySelector("p");
  console.log(byTagName(para, "span").length);
  // → 2