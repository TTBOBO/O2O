var Dimension = function(_dimension, _answers) {
	var dimension = _dimension;
	var answers = _answers;

	this.calc = function() {
		var D = [];
		//遍历维度
		for (var di in dimension) {
			
			var o = {};
			var d = dimension[di];
			o.id = d.id;
			o.score = this.getDimensionScore(d.items, d.scorematrix);
			D[di] = o;
		}
		return D;
	}

	//this.getDimensionScore 

	//计算一个维度的总分
	this.getDimensionScore = function(items, scorematrix) {
		var score = 0;
		for (var i in items) {
			var answer = answers[parseInt(items[i]) - 1];
			var matrix = scorematrix[i];
			var s = this.matrixCalc(matrix, answer);
			score += s;
		}
		return score;
	}

	//矩阵计算
	this.matrixCalc = function(matrix, answer) {
		var count = 0;
		var l = matrix.length;
		for (var i = 0; i < l; i++) {
			var x = parseInt(matrix[i]) * parseInt(answer[i]);
			count += x;
		}
		return count;
	}

}