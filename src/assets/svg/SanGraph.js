import React from "react";
import Svg, {G, Polygon, Defs, Use, ClipPath, Image} from 'react-native-svg';

const SVG = ({
	             style = {},
	             fill = "#555555",
	             width = "100%",
	             height = "100%",
	             viewBox = "0 0 20 20",
             }) => (
	<Svg
		width={width}
		style={style}
		height={height}
		viewBox={viewBox}
		xmlns="http://www.w3.org/2000/svg"
	>
		<G>
			<G>
				<Defs>
					<Polygon id="SVGID_1_" points="0.1,9.3 4.7,9.3 4.7,19.9 0.1,19.9 0.1,9.3    "/>
				</Defs>
				<ClipPath id="SVGID_2_">
					<Use xlinkHref="#SVGID_1_" style="overflow:visible;"/>
				</ClipPath>
				<G style="clip-path:url(#SVGID_2_);">
					<Image style="overflow:visible;" width="44" height="44"
					       xlinkHref="data:image/jpeg;base64,/9j/4AAQSkZJRgABAgEAbABsAAD/7AARRHVja3kAAQAEAAAAHgAA/+4AIUFkb2JlAGTAAAAAAQMA EAMCAwYAAAHoAAACMwAAAu7/2wCEABALCwsMCxAMDBAXDw0PFxsUEBAUGx8XFxcXFx8eFxoaGhoX Hh4jJSclIx4vLzMzLy9AQEBAQEBAQEBAQEBAQEABEQ8PERMRFRISFRQRFBEUGhQWFhQaJhoaHBoa JjAjHh4eHiMwKy4nJycuKzU1MDA1NUBAP0BAQEBAQEBAQEBAQP/CABEIAC0ALQMBIgACEQEDEQH/ xACZAAACAwADAAAAAAAAAAAAAAAABAUGBwECAwEAAwEBAAAAAAAAAAAAAAAAAgMEBQEQAAECBAUF AQAAAAAAAAAAAAUAAxABAgQRMRI0FiIyFTUGFBEAAQICBgkFAAAAAAAAAAAAAQIDAAQQEXLSkzUx UZGx0eEyknMhQWESNBIBAAEEAwEAAAAAAAAAAAAAARAAEQJyITFBEv/aAAwDAQACEQMRAAAAhIrQ VZQpBd6Kfe5Hjy1pZlbHQZ7oWe0mgBezWlmlshPGe6HQKCjD0L2f/9oACAECAAEFAKrymU2biTk0 532XenJddnLrX//aAAgBAwABBQDXJU1Ywnm3mp50Zr//2gAIAQEAAQUA+oNGWPoOQHlyA8uQHlyA 8uQHkUHD3SHixi8WMRlttopAjvYHfbwI72B328CO9gd9vAhp/bhQsKEckx5bTbrTbr//2gAIAQIC Bj8AT5eG1ICWLxls1lrGWz7WWsf/2gAIAQMCBj8A6lphn//aAAgBAQEGPwCeZYn5lppDpCG0POJS kVD0CQqoRmc3juXozObx3L0ZnN47l6Mzm8dy9GZzeO5eh9xyVZWtSq1KU2kkn5JEfjYwkcI/GxhI 4RMttpCEJXUlKQAAKvYCl61TN+Q7qXrVM35DupetUzfkO6l6snq1c40nZzjSdnOJqtagfudCRqtx 1r7BfjrX2C/H/9k="
					       transform="matrix(0.6637 0 0 0.6637 -5.2531 -4.6179)">
					</Image>
				</G>
			</G>
			<G>
				<Defs>
					<Polygon id="SVGID_3_" points="7.6,0 12.2,0 12.2,19.9 7.6,19.9 7.6,0    "/>
				</Defs>
				<ClipPath id="SVGID_4_">
					<Use xlinkHref="#SVGID_3_" style="overflow:visible;"/>
				</ClipPath>
				<G style="clip-path:url(#SVGID_4_);">
					<Image style="overflow:visible;" width="44" height="44"
					       xlinkHref="data:image/jpeg;base64,/9j/4AAQSkZJRgABAgEAbABsAAD/7AARRHVja3kAAQAEAAAAHgAA/+4AIUFkb2JlAGTAAAAAAQMA EAMCAwYAAAHqAAACQAAAAzn/2wCEABALCwsMCxAMDBAXDw0PFxsUEBAUGx8XFxcXFx8eFxoaGhoX Hh4jJSclIx4vLzMzLy9AQEBAQEBAQEBAQEBAQEABEQ8PERMRFRISFRQRFBEUGhQWFhQaJhoaHBoa JjAjHh4eHiMwKy4nJycuKzU1MDA1NUBAP0BAQEBAQEBAQEBAQP/CABEIAC0ALQMBIgACEQEDEQH/ xACiAAADAQADAQAAAAAAAAAAAAAAAwYEAQIHBQEAAwEAAAAAAAAAAAAAAAAAAgMEBRAAAAQDCAMB AAAAAAAAAAAAAAIEBQE0NRARMUFCAxQGMhMVEhEAAgADAwYMBwAAAAAAAAAAAQIAAwQRsnMQsWJy swUhMUGR0eEiQpITM3RRYTJSQxQVEgABAwQDAAAAAAAAAAAAAAAAEAECEXGRgiFBMv/aAAwDAQAC EQMRAAAAnbCBt5A+gJIlwq8i9Z2y3iLeYdQEC/NlsXsO2W8XbTDoOSFfmq39Nd3/2gAIAQIAAQUA WRjAv7MNC3xGhZ43DR//2gAIAQMAAQUAPhfEZbmAy3MBl//aAAgBAQABBQB8fHvae21ctO3cxWOY rC1+fCrYP776OwV5rpli+eLL9grzXTLF88WX7BXmumWL54sv2CvNdMsXzxZd/hsfda4E+ZcQXEC8 uxzil2PR/9oACAECAgY/AI0enJ6fJqRumpG51k1P/9oACAEDAgY/AGVlZf/aAAgBAQEGPwDeEqVv CqSWlVOVEWdMVVVZjAAANwARSu9RNZ2kyyzF2JJKi0k2x68zxt0x68zxt0xUKu8qpVWa4AE+YAAG PAO1Dn+lV2hlAPnzOUPpRvP3c/aNFHgSrgy1OLMvGH10zPG8/dz9o0UeBKuDLU4sy8YfXTM8bz93 P2jRR4Eq4MtTizLxh9dMzxvP3c/aNFHgSrgy1OLMvGH10zPG8rXYH9ufaAoP5G04o7CbPIlcmgPn HGebrjjPN1xU2u/qv3B9x04ftv8AWncHwfTj/9k="
					       transform="matrix(0.6637 0 0 0.6637 -4.353 -4.6179)">
					</Image>
				</G>
			</G>
			<G>
				<Defs>
					<Polygon id="SVGID_5_" points="15.3,5.3 20,5.3 20,19.9 15.3,19.9 15.3,5.3    "/>
				</Defs>
				<ClipPath id="SVGID_6_">
					<Use xlinkHref="#SVGID_5_" style="overflow:visible;"/>
				</ClipPath>
				<G style="clip-path:url(#SVGID_6_);">

					<Image style="overflow:visible;" width="44" height="44"
					       xlinkHref="data:image/jpeg;base64,/9j/4AAQSkZJRgABAgEAbABsAAD/7AARRHVja3kAAQAEAAAAHgAA/+4AIUFkb2JlAGTAAAAAAQMA EAMCAwYAAAHiAAACLgAAAvD/2wCEABALCwsMCxAMDBAXDw0PFxsUEBAUGx8XFxcXFx8eFxoaGhoX Hh4jJSclIx4vLzMzLy9AQEBAQEBAQEBAQEBAQEABEQ8PERMRFRISFRQRFBEUGhQWFhQaJhoaHBoa JjAjHh4eHiMwKy4nJycuKzU1MDA1NUBAP0BAQEBAQEBAQEBAQP/CABEIAC0ALQMBIgACEQEDEQH/ xACeAAADAQEBAAAAAAAAAAAAAAAABAUGAQcBAAIDAQAAAAAAAAAAAAAAAAACAQMFBBAAAQEHAwQD AAAAAAAAAAAAAAUQARECAwYWFTU2MRIiBDITFBEAAQICBwcCBwAAAAAAAAAAAQIDAAQRsdJzkwU1 ECAxkdHhNEESIVFxMmKSExIAAgEDBQEAAAAAAAAAAAAAAAEQMUECESGREnIy/9oADAMBAAIRAxEA AACJKYjhQNU7ypiDbkGQj2I/W/oT6D+PQAKYaPbkbV++fSeyKeHRY//aAAgBAgABBQAm9yVz/wBs rKnzZUd5wP/aAAgBAwABBQA73H2OY/qx/U//2gAIAQEAAQUAuhaWaFwZAvGQLxkC8ZAvGQLxd3JR GTk+ql6WmGlphpaYXdyUQtobd3JRC2ht3clELaG3Y6jkfb64hup6TCQhIQkP/9oACAECAgY/ABrq 9nofLjL05y9O5bk//9oACAEDAgY/AChSHLj/2gAIAQEBBj8AnmWJ+ZaaQ6QhtDziUpFA+ASFUCNT m8dy1GpzeO5ajU5vHctRqc3juWo1Obx3LUZjfGobJZxyVZWtSKVKU2kkmn1JEeGxhI6R4bGEjpHh sYSOkZjfGobJS7Fe5mN8ahslLsV7mY3xqGyUuxXuZh7lqB/qaQEgjgPyEfev9BbiVoUSPYPQfP6x xPLvHE8u8cTy7x//2Q=="
					       transform="matrix(0.6637 0 0 0.6637 -3.2529 -4.6179)">
					</Image>
				</G>
			</G>
		</G>
	</Svg>
);

export default SVG;
