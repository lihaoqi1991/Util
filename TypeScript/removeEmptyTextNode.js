/**
 * Created by lihaoqi on 16/2/2.
 */
function del_ff(elem) {
    var elem_child = elem.childNodes;
    for (var i = 0; i < elem_child.length; i++) {
        if (elem_child[i].nodeName == "#text" && !/\s/.test(elem_child.nodeValue)) {
            elem.removeChild(elem_child)
        }
    }
}