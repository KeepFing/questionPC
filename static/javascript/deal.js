function deal(data) {
	var one = []
	for(let v of data) {
		if(v.parentId == 1) {
			one.push(v)
			v.children = []
		}
	}
	for(let v of data) {
		for(let k of one) {
			if(v.parentId == k.menuId) {
				k.children.push(v)
			}
		}
	}
	for(let v of one) {
		for(let k of v.children) {
			k.children = []
			for(let q of data) {
				if(q.parentId == k.menuId) {
					k.children.push(q)
				}
			}
		}
	}
	return one
}