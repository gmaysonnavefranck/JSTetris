'use strict'
let tetriminos = {
    drawSquare: function(linha, coluna) {
        return {
        pos1: {
            line: linha,
            column: coluna
        },
        pos2: {
            line: (linha*1),
            column: (coluna*1+1)
        },
        pos3: {
            line: (linha*1+1),
            column: (coluna*1)
        },
        pos4: {
            line: (linha*1+1),
            column: (coluna*1+1)
        }
        }
    },

    drawT: function(linha, coluna,rotation) {
        if(rotation === 0) {
        return {
            pos1: {
                line: (linha*1),
                column: (coluna*1-1)
            },
            pos2: {
                line: (linha*1-1),
                column: (coluna*1)
            },
            pos3: {
                line: (linha*1),
                column: (coluna*1)
            },
            pos4: {
                line: (linha*1),
                column: (coluna*1+1)
            }
        }
        }
        if(rotation === 90 ) {
        return {
            pos1: {
                line: (linha*1-1),
                column: (coluna*1)
            },
            pos2: {
                line: (linha*1),
                column: (coluna*1+1)
            },
            pos3: {
                line: (linha*1),
                column: (coluna*1)
            },
            pos4: {
                line: (linha*1+1),
                column: (coluna*1)
            }
        }
        }
        if(rotation === 180) {
        return {
            pos1: {
                line: (linha*1),
                column: (coluna*1+1)
            },
            pos2: {
                line: (linha*1+1),
                column: (coluna*1)
            },
            pos3: {
                line: (linha*1),
                column: (coluna*1)
            },
            pos4: {
                line: (linha*1),
                column: (coluna*1-1)
            }
        }
        }
        if(rotation === 270) {
        return {
            pos1: {
                line: (linha*1+1),
                column: (coluna*1)
            },
            pos2: {
                line: (linha*1),
                column: (coluna*1-1)
            },
            pos3: {
                line: (linha*1),
                column: (coluna*1)
            },
            pos4: {
                line: (linha*1-1),
                column: (coluna*1)
            }
        }
        }
    },

    drawLine: function(linha, coluna, rotation) {
        if(rotation === 90 || rotation === 270){
        return {
            pos1: {
                line: linha,
                column: (coluna*1-1)
            },
            pos2: {
                line: (linha*1),
                column: (coluna*1)
            },
            pos3: {
                line: (linha*1),
                column: (coluna*1+1)
            },
            pos4: {
                line: (linha*1),
                column: (coluna*1+2)
            }
        }
        }
        if(rotation === 0 || rotation === 180){
        return {
            pos1: {
                line: (linha*1-1),
                column: coluna
            },
            pos2: {
                line: (linha*1),
                column: (coluna)
            },
            pos3: {
                line: (linha*1+1),
                column: (coluna*1)
            },
            pos4: {
                line: (linha*1+2),
                column: (coluna*1)
            }
        }
        }
    },

    drawL: function(linha, coluna,rotation) {
        if(rotation === 0) {
            return {
                pos1: {
                    line: (linha*1-2),
                    column: (coluna*1)
                },
                pos2: {
                    line: (linha*1-1),
                    column: (coluna*1)
                },
                pos3: {
                    line: (linha*1),
                    column: (coluna*1)
                },
                pos4: {
                    line: (linha*1),
                    column: (coluna*1+1)
                }
            }
        }
        if(rotation === 90 ) {
        return {
            pos1: {
                line: (linha*1),
                column: (coluna*1+2)
            },
            pos2: {
                line: (linha*1),
                column: (coluna*1+1)
            },
            pos3: {
                line: (linha*1),
                column: (coluna*1)
            },
            pos4: {
                line: (linha*1+1),
                column: (coluna*1)
            }
        }
        }
        if(rotation === 180) {
        return {
            pos1: {
                line: (linha*1+2),
                column: (coluna*1)
            },
            pos2: {
                line: (linha*1+1),
                column: (coluna*1)
            },
            pos3: {
                line: (linha*1),
                column: (coluna*1)
            },
            pos4: {
                line: (linha*1),
                column: (coluna*1-1)
            }
        }
        }
        if(rotation === 270) {
        return {
            pos1: {
                line: (linha*1),
                column: (coluna*1-2)
            },
            pos2: {
                line: (linha*1),
                column: (coluna*1-1)
            },
            pos3: {
                line: (linha*1),
                column: (coluna*1)
            },
            pos4: {
                line: (linha*1-1),
                column: (coluna*1)
            }
        }
        }
    },

    drawReverseL: function(linha, coluna,rotation) {
        if(rotation === 0) {
            return {
                pos1: {
                    line: (linha*1-2),
                    column: (coluna*1)
                },
                pos2: {
                    line: (linha*1-1),
                    column: (coluna*1)
                },
                pos3: {
                    line: (linha*1),
                    column: (coluna*1)
                },
                pos4: {
                    line: (linha*1),
                    column: (coluna*1-1)
                }
            }
        }
        if(rotation === 90 ) {
            return {
                pos1: {
                    line: (linha*1),
                    column: (coluna*1+2)
                },
                pos2: {
                    line: (linha*1),
                    column: (coluna*1+1)
                },
                pos3: {
                    line: (linha*1),
                    column: (coluna*1)
                },
                pos4: {
                    line: (linha*1-1),
                    column: (coluna*1)
                }
            }
        }
        if(rotation === 180) {
            return {
                pos1: {
                    line: (linha*1+2),
                    column: (coluna*1)
                },
                pos2: {
                    line: (linha*1+1),
                    column: (coluna*1)
                },
                pos3: {
                    line: (linha*1),
                    column: (coluna*1)
                },
                pos4: {
                    line: (linha*1),
                    column: (coluna*1+1)
                }
            }
        }
        if(rotation === 270) {
            return {
                pos1: {
                    line: (linha*1),
                    column: (coluna*1-2)
                },
                pos2: {
                    line: (linha*1),
                    column: (coluna*1-1)
                },
                pos3: {
                    line: (linha*1),
                    column: (coluna*1)
                },
                pos4: {
                    line: (linha*1+1),
                    column: (coluna*1)
                }
            }
        }
    },

    drawS: function(linha, coluna,rotation) {
        if(rotation === 0) {
            return {
                pos1: {
                    line: (linha*1-1),
                    column: (coluna*1-1)
                },
                pos2: {
                    line: (linha*1-1),
                    column: (coluna*1)
                },
                pos3: {
                    line: (linha*1),
                    column: (coluna*1)
                },
                pos4: {
                    line: (linha*1),
                    column: (coluna*1+1)
                }
            }
        }
       if(rotation === 90 ) {
            return {
                pos1: {
                    line: (linha*1-1),
                    column: (coluna*1+1)
                },
                pos2: {
                    line: (linha*1),
                    column: (coluna*1+1)
                },
                pos3: {
                    line: (linha*1),
                    column: (coluna*1)
                },
                pos4: {
                    line: (linha*1+1),
                    column: (coluna*1)
                }
            }
        }
        if(rotation === 180) {
            return {
                pos1: {
                    line: (linha*1+1),
                    column: (coluna*1+1)
                },
                pos2: {
                    line: (linha*1+1),
                    column: (coluna*1)
                },
                pos3: {
                    line: (linha*1),
                    column: (coluna*1)
                },
                pos4: {
                    line: (linha*1),
                    column: (coluna*1-1)
                }
            }
        }
        if(rotation === 270) {
            return {
                pos1: {
                    line: (linha*1+1),
                    column: (coluna*1-1)
                },
                pos2: {
                    line: (linha*1),
                    column: (coluna*1-1)
                },
                pos3: {
                    line: (linha*1),
                    column: (coluna*1)
                },
                pos4: {
                    line: (linha*1-1),
                    column: (coluna*1)
                }
            }
        }
    },

    drawReverseS: function(linha, coluna,rotation) {
        if(rotation === 0) {
            return {
                pos1: {
                    line: (linha*1-1),
                    column: (coluna*1+1)
                },
                pos2: {
                    line: (linha*1-1),
                    column: (coluna*1)
                },
                pos3: {
                    line: (linha*1),
                    column: (coluna*1)
                },
                pos4: {
                    line: (linha*1),
                    column: (coluna*1-1)
                }
            }
        }
        if(rotation === 90 ) {
            return {
                pos1: {
                    line: (linha*1+1),
                    column: (coluna*1+1)
                },
                pos2: {
                    line: (linha*1),
                    column: (coluna*1+1)
                },
                pos3: {
                    line: (linha*1),
                    column: (coluna*1)
                },
                pos4: {
                    line: (linha*1-1),
                    column: (coluna*1)
                }
            }
        }
        if(rotation === 180) {
            return {
                pos1: {
                    line: (linha*1+1),
                    column: (coluna*1-1)
                },
                pos2: {
                    line: (linha*1+1),
                    column: (coluna*1)
                },
                pos3: {
                    line: (linha*1),
                    column: (coluna*1)
                },
                pos4: {
                    line: (linha*1),
                    column: (coluna*1+1)
                }
            }
        }
        if(rotation === 270) {
            return {
                pos1: {
                    line: (linha*1-1),
                    column: (coluna*1-1)
                },
                pos2: {
                    line: (linha*1),
                    column: (coluna*1-1)
                },
                pos3: {
                    line: (linha*1),
                    column: (coluna*1)
                },
                pos4: {
                    line: (linha*1+1),
                    column: (coluna*1)
                }
            }
        }
    }
}
export default tetriminos;
