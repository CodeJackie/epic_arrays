const HEADER = {
    render: () => {
    return 
        `<!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <link rel="icon" type="image/svg+xml" href="/vite.svg" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="stylesheet" src="/css/style.css">
            <title>EPIC</title>
          </head>
          <body>
            <header>
              <nav>
                <div id="logo">
                  <h2>Project EPIC</h2>
                </div>
                <div id="menu">
                  <ul>
                    <li><a href=/>EPIC App</a></li>
                    <li><a href=/about/>About</a></li>
                  </ul>
                </div>
              </nav>
            </header>`
    }
}

HEADER()

module.exports = {HEADER}