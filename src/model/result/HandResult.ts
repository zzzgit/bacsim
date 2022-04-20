enum Result {
	BancoWins = "_BankerWins",
	PlayerWins = "_PlayerWins",
	Tie = "_Tie",
}


class HandResult {
	static BancoWins = new HandResult(1)

	static PlayerWins = new HandResult(-1)

	static Tie = new HandResult(0)


	static isOpposite(foo: HandResult, bar: HandResult):boolean {
		return foo._result != bar._result
	}

	static isIdentical(foo: HandResult, bar: HandResult):boolean {
		return foo._result == bar._result
	}


	static getOpposite(foo: HandResult):HandResult {
		if (foo._result == Result.BancoWins) {
			return HandResult.PlayerWins
		}
		if (foo._result == Result.PlayerWins) {
			return HandResult.BancoWins
		}
		return foo
	}

	private _result: Result

	// 0 tie， 1 banco wins， -1 player wins
	constructor(code:number) {
		if (code === 0) {
			this._result = Result.Tie
		} else if (code === 1) {
			this._result = Result.BancoWins
		} else {
			this._result = Result.PlayerWins
		}
	}
}

export default HandResult
