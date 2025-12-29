latex_symbols = [
  ("x", "x"),
  ("y", "y"),
  ("z", "z"),
  ("\\mathbf{u}", "u"),
  ("\\mathbf{v}", "v"),
  ("\\mathbf{w}", "w"),
  ("\\mathbf{i}", "i"),
  ("\\mathbf{j}", "j"),
  ("\\mathbf{k}", "k"),
  ("\\alpha", "alpha"),
  ("\\beta", "beta"),
  ("\\gamma", "gamma"),
  ("\\delta", "delta"),
  ("\\epsilon", "epsilon"),
  ("\\varepsilon", "varepsilon"),
  ("\\zeta", "zeta"),
  ("\\eta", "eta"),
  ("\\theta", "theta"),
  ("\\vartheta", "vartheta"),
  ("\\iota", "iota"),
  ("\\kappa", "kappa"),
  ("\\lambda", "lambda"),
  ("\\mu", "mu"),
  ("\\nu", "nu"),
  ("\\xi", "xi"),
  ("\\pi", "pi"),
  ("\\varpi", "varpi"),
  ("\\rho", "rho"),
  ("\\varrho", "varrho"),
  ("\\sigma", "sigma"),
  ("\\varsigma", "varsigma"),
  ("\\tau", "tau"),
  ("\\upsilon", "upsilon"),
  ("\\phi", "phi"),
  ("\\varphi", "varphi"),
  ("\\chi", "chi"),
  ("\\psi", "psi"),
  ("\\omega", "omega"),
  ("\\Gamma", "uGamma"),
  ("\\Delta", "uDelta"),
  ("\\Theta", "uTheta"),
  ("\\Lambda", "uLambda"),
  ("\\Xi", "uXi"),
  ("\\Pi", "uPi"),
  ("\\Sigma", "uSigma"),
  ("\\Upsilon", "uUpsilon"),
  ("\\Phi", "uPhi"),
  ("\\Psi", "uPsi"),
  ("\\Omega", "uOmega"),
  ("+", "plus"),
  ("-", "minus"),
  ("\\times", "times"),
  ("=", "equals"),
  ("\\neq", "neq"),
  ("\\approx", "approx"),
  ("<", "lt"),
  (">", "gt"),
  ("\\leqslant", "leqslant"),
  ("\\geqslant", "geqslant"),
  ("\\infty", "infty"),
  ("\\partial", "partial"),
  ("\\nabla", "nabla"),
  ("\\cdot", "cdot"),
  ("\\int", "int"),
  ("\\oint", "oint"),
  ("\\sum", "sum"),
  ("\\prod", "prod"),
  ("\\forall", "forall"),
  ("\\exists", "exists"),
  ("\\neg", "neg"),
  ("\\wedge", "wedge"),
  ("\\vee", "vee"),
];

import os

for (letter, name) in latex_symbols:
    template = rf"""
    \documentclass{{standalone}}
    \usepackage{{unicode-math}}
    \setmainfont{{TeX Gyre Pagella}}
    \setmathfont{{TeX Gyre Pagella Math}}

    \usepackage{{pgfplots}}
    \pgfplotsset{{compat = 1.18}}

    \begin{{document}}
    \begin{{tikzpicture}}
      \node at (0,0) {{\({letter}\)}};
    \end{{tikzpicture}}
    \end{{document}}
    """

    with open(f"./tikz/{name}.tikz", "w") as f:
        f.write(template)

    command = f"latexmk -shell-escape -file-line-error -interaction=nonstopmode -halt-on-error -output-directory=figures -xelatex tikz/{name}.tikz"
    import os
    os.system(command)
