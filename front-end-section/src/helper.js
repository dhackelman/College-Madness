export function reverseChildNodes(node) {
	var parentNode = node.parentNode,
		nextSibling = node.nextSibling,
		frag = node.ownerDocument.createDocumentFragment();
	parentNode.removeChild(node);
	while (node.lastChild)
		frag.appendChild(node.lastChild);
	node.appendChild(frag);
	parentNode.insertBefore(node, nextSibling);
	return node;
}

// reverseChildNodes(document.getElementById('con'));

// iterate over an Object
export function iterateObj(obj) {
	Object.keys(obj).forEach(function(key) {
		console.log(key, obj[key]);
	});
}

export function iterateObject(obj) {
	Object.entries(obj).forEach(
		([key, value]) => console.log(key, value)
	);
}
