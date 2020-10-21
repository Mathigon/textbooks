// =============================================================================
// Britain's Coastline
// (c) Mathigon
// =============================================================================


import {Point} from '@mathigon/euclid';

// This is a hard-coded result of the computation below, which takes very long
// in a browser!

// const $coast = $svg.$('path') as SVGView;
// const length = $coast.strokeLength;
// const points = list(0, length, 4).map(i => $coast.getPointAtLength(i));

const POINTS = '103 10,103 13,100 14,96 13,93 14,89 16,85 17,82 15,79 17,76 17,73 18,69 20,67 23,68 20,67 17,64 16,62 19,60 22,58 22,60 19,59 16,57 16,54 14,50 13,50 16,47 19,48 23,49 24,48 26,47 27,45 29,46 33,49 35,51 37,48 35,44 36,40 37,38 37,40 41,42 43,42 47,38 47,35 47,38 50,41 52,44 54,45 58,47 61,45 59,42 57,38 55,39 58,43 60,39 59,36 58,33 60,31 57,29 59,31 62,30 65,28 62,25 60,24 62,24 66,27 68,26 70,24 73,26 76,29 79,33 79,29 80,27 79,24 77,22 80,22 84,24 87,25 91,28 89,30 89,33 89,35 88,33 90,29 92,27 94,31 96,34 97,37 99,33 97,30 97,29 101,30 103,33 105,34 106,31 105,27 105,25 108,27 110,30 113,32 113,28 113,25 111,22 114,22 118,22 119,26 119,27 120,27 121,23 122,24 124,21 126,18 126,14 126,10 128,12 131,16 131,20 131,23 130,27 130,31 131,28 131,24 131,21 133,18 134,19 137,23 139,26 141,30 141,33 138,35 135,38 132,41 129,43 126,46 123,44 127,43 130,47 130,44 131,41 132,38 135,37 139,40 139,40 140,36 141,36 142,39 144,39 145,36 145,34 148,32 152,31 155,32 159,30 163,33 161,32 163,32 166,29 169,27 172,28 172,30 169,30 172,28 175,30 176,30 177,28 181,30 184,33 183,35 181,33 184,30 187,28 190,27 194,27 198,27 202,25 206,23 209,25 212,29 211,33 209,32 205,33 202,34 198,35 194,35 190,37 187,39 184,38 180,37 177,36 173,36 170,39 168,41 165,44 162,47 159,50 157,51 157,48 160,46 163,43 165,40 168,39 172,38 176,40 179,43 180,43 176,44 174,47 176,48 174,48 178,51 178,52 174,53 171,54 167,53 163,55 165,55 167,54 171,57 171,55 168,58 170,61 173,64 175,64 175,60 174,56 173,54 176,53 180,54 184,53 188,55 191,58 193,61 196,62 199,61 203,58 205,56 209,55 212,54 216,51 219,49 222,48 226,49 230,50 233,48 231,46 228,44 231,45 235,47 238,49 241,51 244,52 248,54 247,53 243,52 240,54 237,58 237,61 240,64 242,67 245,70 246,71 242,71 239,69 235,71 235,74 237,76 238,78 241,80 238,81 240,85 241,87 238,89 236,92 235,96 234,96 230,99 229,103 229,107 230,111 230,115 229,114 231,110 232,107 232,106 235,103 236,101 239,100 243,98 246,97 250,95 254,96 257,98 261,101 264,102 267,103 271,106 274,108 270,108 274,107 277,110 280,112 277,114 274,117 275,121 273,121 277,120 280,119 284,120 287,116 288,113 290,113 294,114 298,118 299,119 300,116 302,113 305,112 309,114 313,115 316,118 319,121 321,123 322,119 323,116 321,115 317,112 316,110 319,111 322,113 326,110 324,107 321,103 321,99 322,95 323,92 323,88 321,87 323,84 325,80 327,76 328,74 331,72 334,70 338,68 341,64 343,61 345,59 348,60 350,63 349,67 350,68 347,71 345,75 344,78 346,78 350,80 353,82 355,79 358,79 362,82 363,82 365,80 368,79 372,78 375,75 379,72 381,69 383,66 385,62 385,59 388,55 390,53 391,49 391,47 394,44 396,40 398,43 399,46 400,46 404,43 406,45 409,48 408,52 408,52 408,48 409,48 411,51 413,54 412,58 411,60 408,64 406,68 406,70 405,72 407,72 409,75 409,79 410,79 412,75 412,73 415,76 417,80 415,83 415,85 412,89 413,91 417,93 420,96 422,99 424,103 425,107 424,110 422,112 419,115 416,119 416,123 415,126 413,129 410,131 407,135 405,133 407,130 410,128 413,126 416,123 419,120 421,117 424,115 427,115 431,113 434,110 435,106 435,102 435,98 433,94 433,90 433,86 433,82 434,78 434,75 437,76 441,74 444,70 445,66 444,65 447,65 451,64 455,62 458,59 461,58 464,54 466,51 467,49 470,48 474,45 476,43 480,40 482,37 485,34 485,30 487,27 489,27 493,31 493,33 490,37 490,40 492,42 495,44 496,48 494,47 491,48 488,49 486,50 487,53 485,57 483,58 479,62 479,66 479,69 478,73 478,76 479,77 477,80 480,83 480,87 482,90 484,93 484,95 481,98 478,98 475,99 473,99 469,101 465,101 462,103 465,106 462,110 461,114 460,117 459,121 459,125 461,128 463,131 466,133 469,133 467,134 464,138 464,142 465,146 466,149 465,149 461,146 461,148 459,151 460,155 459,158 458,162 459,165 457,169 455,169 452,165 449,169 451,172 453,175 456,175 453,177 454,179 455,180 454,182 456,182 453,183 455,186 458,189 457,192 456,196 455,200 454,204 454,208 454,212 455,216 456,220 458,222 456,226 454,230 452,233 451,236 449,240 448,244 449,244 445,247 442,250 440,254 439,257 437,259 433,257 429,260 426,258 424,254 424,250 425,246 426,242 426,239 426,243 425,240 422,237 422,234 425,232 423,235 422,234 420,230 419,226 421,228 419,232 418,235 417,239 417,242 414,241 413,241 412,244 409,242 406,239 407,237 406,241 405,244 403,247 404,251 403,254 401,253 399,254 397,252 395,251 394,254 394,255 395,258 394,260 390,263 388,265 385,266 381,267 377,268 373,269 369,270 365,270 361,269 358,268 354,265 350,262 348,259 345,256 344,252 342,248 341,245 341,242 341,238 341,234 341,230 341,228 344,226 348,224 351,221 350,218 347,215 345,214 344,217 341,219 337,222 335,224 332,224 328,223 324,221 320,220 316,217 313,214 311,211 308,208 306,205 303,202 301,198 301,195 302,191 301,192 300,195 301,199 300,203 299,206 302,209 304,213 305,217 306,217 306,216 303,214 299,211 296,209 293,207 289,206 285,206 281,209 278,208 277,205 275,203 272,200 269,199 265,197 262,195 258,192 256,188 254,185 253,181 251,177 249,174 251,174 247,173 244,171 241,169 237,169 233,168 230,166 226,164 222,164 218,162 215,162 211,161 207,161 203,160 199,159 195,156 193,153 191,151 188,149 185,147 181,144 178,141 176,138 175,134 173,131 171,129 169,125 167,121 168,119 171,116 173,112 173,108 172,104 172,100 171,97 170,93 169,96 168,100 169,103 169,107 168,110 166,112 163,115 160,119 159,123 159,126 158,128 154,126 152,122 151,121 147,119 145,116 146,112 148,109 150,105 150,109 148,112 146,116 144,120 144,123 143,126 141,129 138,132 135,133 132,134 128,136 125,139 122,141 119,142 115,143 111,145 108,146 104,146 100,147 96,149 93,152 90,154 86,155 83,154 79,153 76,151 73,147 71,143 71,139 71,136 72,132 72,128 71,124 71,120 70,116 71,112 71,109 70,105 69,101 69,98 72,94 72,90 74,87 76,83 76,81 78,79 81,75 82,75 79,78 78,80 74,82 71,78 72,74 73,71 75,69 77,71 74,74 71,78 70,81 68,83 70,85 67,88 64,90 61,87 62,85 62,81 62,77 61,78 60,82 59,83 55,85 52,88 50,91 47,94 45,97 42,100 39,102 36,105 34,109 32,111 29,113 25,113 22,111 20,113 16,114 13,112 11,108 11,104 11';

export const COASTLINE = POINTS.split(',').map(p => {
  const [x, y] = p.split(' ');
  return new Point(+x, +y);
});
