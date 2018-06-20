export class MineField {
    Height: number;
    Width: number;
    Score: number;
    Mines: number;
    Flags: number;
    MaxFlags: number;
    Field: number[][];
    MineAround: number[][];
    GameState: boolean;
    WinState: boolean;
    // 0 - empty/closed  2 - empty/flag  4 - empty/open
    // 1 - mine/closed   3 - mine/flag   5 - empty/mine

    constructor(heigth: number = 8, width: number = 8, mines: number = 10) {
        this.GameState = true;
        this.WinState = false;
        this.Height = heigth;
        this.Width = width;
        this.Mines = mines;
        this.MaxFlags = mines;
        this.Score = 0;
        this.Flags = 0;
        this.Field = [];
        this.MineAround = [];
        for (var i: number = 0; i < this.Height; i++) {
            this.Field[i] = [];
            this.MineAround[i] = [];
            for (var j: number = 0; j < this.Width; j++) {
                this.Field[i][j] = 0;
                this.MineAround[i][j] = 0;
            }
        }
        for (var i: number = 0; i < this.Mines; i++) {
            var x = Math.floor((Math.random() * (this.Height - 0) + 0));
            var y = Math.floor((Math.random() * (this.Width - 0) + 0));
            if (this.Field[x][y] == 0)
                this.Field[x][y] = 1;
            else
                i--;
        }
        for (var n: number = 0; n < this.Height; n++) {
            for (var m: number = 0; m < this.Width; m++) {
                var index = 0;
                for (var i = n - 1; i <= n + 1; i++) {
                    for (var j = m - 1; j <= m + 1; j++) {
                        if (i >= 0 && j >= 0 && i < this.Height && j < this.Width) {
                            if (this.Field[i][j] == 1 || this.Field[i][j] == 3 || this.Field[i][j] == 5)
                                index++;
                        }
                    }
                }
                this.MineAround[n][m] = index;
            }
        }
    }
}