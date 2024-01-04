
const Icons = (props) => {


            return (
                <>
                {
                    props.name === "trello-icon" ? <img
                    id="trello-icon"
                    alt="trello"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA9UlEQVR4nO2WPQrCQBCFt/IaARs9gJ7Au9h4D3+alNrojkWwWGd6yUxOoUfwB/QIFpENFpvIgpINNgk8CMvLfJvZB7PKGNPRxAuNcgWSPIhQLoA8t7WVfQlWmKognqugO6eyNPFNlRZQEsBDf4PcdQX7dATID8d7t2sfPjz0gXjn1iwB1ibrKc+jkVeOd+nz2Rp+AGaR70NAiZ1DjL0AzKIWkLct+n+KNEri82niYYCY8hNIplvksSsgmWjiU30Afa8WkP/Won068KYDJal9BoBytEmopkOTzN7JqQloQKoY0M2NzHOjQ9+2VtmrRQEJ+SfOteUFjgrhZZhDX5YAAAAASUVORK5CYII="
                  /> : props.name === "template-icon" ? <img 
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAAACXBIWXMAAAsTAAALEwEAmpwYAAACMElEQVR4nJ3TT2jSYRgH8LWoQdGg7nZpDKnZtjazoqyWDUXrECOCWMt0+duh1EP05xLBCEZ1KEK6dJkoQ4iky/KiToaWTmJsrsO2JqnTTX/v85NVdKlvOOq3n04d9MD38r4PH3h5n6ehYYsqFArNjLEBxthrxtgbxtitTCaza1OjyxvQeDzhfW5vsDM89VlRLBZVRGRijL0loh9EBGlyK6szvom4ugzxTk7uya6svvqSTH2PRqMIBAI1U7r/NDOP98H4UhkynVh4nEovQ6vVwWQehM1mg91ePRzHQa/XI5/P/xIE4YCIpDPZSDwex7XrRjx4MgzZCQUOqZXo7TMgl1tG98UetJzsRJtaiZEXT8FxFpT6ieiOiBBROhKJwGwZguxUB/aG76F9aRitZg1cLieaLh9Fy9zD9bPDmmOwWq0o9TPGPFIkJSJqCWLphdM5ip1XVBvI+eNSZEqKRP4TWZAiL2shY2NuNGkVkPluQx60o/3cBkJEGRFhjBlqIdHoB9ge3Ye2/xL6blzFuG9cisyKCIAdoVCoUA2JxT5iba1YFslz/GWz4na7n5WQDt1pNHNn0Xr3AvarDmJxcb4eMlKGyOXytv4B4+/k1xRCoYn1JBKzm4BSLJab/+akp3KFGo90dSWNJvOWE2swGMDzfAzAtmpL2+hwOIb8fv/PervD8/w3QRC6qwFiCYKgJKLpyu39mzQRnakLSH5sO8/zOiJ6TkTviGiUiAaz2ezuyuY/lx9sSgAC1xkAAAAASUVORK5CYII="
                  />:<div>feo</div>
                }
                
                </>
            )

  }



  export default Icons;