stav = randint(1, 6)

def on_forever():
    if stav == 1:
        basic.show_leds("""
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            """)
    elif stav == 2:
        pass
    elif stav == 3:
        pass
    elif stav == 4:
        pass
    elif stav == 5:
        pass
        elif stav == 6:
    else:
        pass
basic.forever(on_forever)
