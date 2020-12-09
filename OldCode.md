### ExecutiveBoard.js (ensuring three cards per row)

createTable(){
        var rowIndex = 0;
        var rows = [];
        for (var i = 0; i <this.execBoardCards.length;i++){
           rows[rowIndex] =(
                <GridRow>
                    {this.createRowCell(i,this.execBoardCards.length)}
                    {this.createRowCell(i+1,this.execBoardCards.length)}
                    {this.createRowCell(i+2,this.execBoardCards.length)}
                </GridRow>
           );
           rowIndex+=1;
           i+=2;
        }

        return(
            <Segment>
                <Grid>
                   {rows}
                </Grid>
            </Segment>
        )
    }

    createRowCell(i, length){
        if (i < length){
            return (<GridColumn width={4}>{this.execBoardCards[i]}</GridColumn>)
        }
        return (<GridColumn/>)
    }

