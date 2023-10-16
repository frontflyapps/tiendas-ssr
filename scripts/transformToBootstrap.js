/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */

const { exec } = require('child_process');
const { v4 } = require('uuid');

const fs = require('fs');
const cheerio = require('cheerio');

// ------------------UTILS---------------------------

const getIsBlockElement = (element) => {
  const name = element[0].name;

  return [
    'address',
    'article',
    'aside',
    'blockquote',
    'canvas',
    'dd',
    'div',
    'dl',
    'dt',
    'fieldset',
    'figcaption',
    'figure',
    'footer',
    'form',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'header',
    'hr',
    'li',
    'main',
    'nav',
    'noscript',
    'ol',
    'p',
    'pre',
    'section',
    'table',
    'tfoot',
    'ul',
    'video',
  ].includes(name);
};

const getSccFilename = (htmlFilename) => htmlFilename.replace('.html', '.scss');
const isNumber = (val) => !isNaN(Number(val));
const justifyContentHandle = (position, breakpointAlias) => {
  const withBreakpoint = (p) => {
    return breakpointAlias ? `justify-content-${breakpointAlias}-${p}` : `justify-content-${p}`;
  };

  switch (position) {
    case 'start':
    case 'flex-start': {
      return withBreakpoint('start');
    }
    case 'center': {
      return withBreakpoint('center');
    }
    case 'end':
    case 'flex-end': {
      return withBreakpoint('end');
    }
    case 'space-around': {
      return withBreakpoint('around');
    }
    case 'space-between': {
      return withBreakpoint('between');
    }
    case 'space-evenly': {
      return withBreakpoint('evenly');
    }
    default: {
      ('<unknown>');
    }
  }
};

const alignItemsHandle = (position, breakpointAlias) => {
  const withBreakpoint = (p) => {
    return breakpointAlias ? `align-items-${breakpointAlias}-${p}` : `align-items-${p}`;
  };

  switch (position) {
    case 'start':
    case 'flex-start': {
      return withBreakpoint('start');
    }
    case 'center': {
      return withBreakpoint('center');
    }
    case 'end':
    case 'flex-end': {
      return withBreakpoint('end');
    }
    case 'stretch': {
      return withBreakpoint('stretch');
    }
    case 'baseline': {
      return withBreakpoint('baseline');
    }
    default: {
      ('<unknown>');
    }
  }
};

const addClassToScss = (scss, styles, className) => {
  let out = scss;

  if (!out.includes("@import 'scss/mixins/breakpoints';")) {
    out = `@import 'scss/mixins/breakpoints'; ${out}`;
  }

  out = `${out}
  .${className}{
    ${Object.keys(styles).map((flexlayoutBreakPoint) => {
      const values = styles[flexlayoutBreakPoint].join(' ');

      if (flexlayoutBreakPoint) {
        return `
        @include media-breakpoint('${flexlayoutBreakPoint}') {
          ${values}
        }
      `;
      } else {
        return values;
      }
    })}
  }
  `;

  return out;
};

const DBlockHandle = (bp) => (bp ? `d-${bp}-block` : `d-block`);
const DInlineHandle = (bp) => (bp ? `d-${bp}-inline` : `d-inline`);
const DNoneHandle = (bp) => (bp ? `d-${bp}-none` : `d-none`);
const DGridHandle = (bp) => (bp ? `d-${bp}-grid` : `d-grid`);
const DFlexHandle = (bp) => (bp ? `d-${bp}-flex` : `d-flex`);
const OrderHandle = (order, bp) => {
  let out = 'order-';

  if (bp) {
    out = `${out}${bp}-`;
  }

  return order ? `${out}${order}` : `${out}0`;
};
const FlexColumnHandle = (bp) => (bp ? `flex-${bp}-column` : `flex-column`);

const classUtils = {
  'd-flex': (bp) => (bp ? `d-${bp}-flex` : `d-flex`),
  'flex-column': (bp) => (bp ? `flex-${bp}-column` : `flex-column`),
  'justify-content': justifyContentHandle,
  'align-items': alignItemsHandle,
  addClassToScss,
};

const getCheerioApiSelector = (attr, bp) => (bp ? `[${attr}\\.${bp}]` : `[${attr}]`);
const getAttrSelector = (attr, bp) => (bp ? `${attr}.${bp}` : `${attr}`);

const flexlayoutBreakPoints = [
  'xs',
  'sm',
  'md',
  'lg',
  'xl',
  'lt-sm',
  'lt-md',
  'lt-lg',
  'lt-xl',
  'gt-xs',
  'gt-sm',
  'gt-md',
  'gt-xl',
];

const getBreakPoint = (flexLayoutAlias) => {
  if (!flexLayoutAlias) {
    return [undefined, undefined];
  }

  switch (flexLayoutAlias) {
    case 'xs':
      return ['xs', 'sm'];
    case 'sm':
      return ['sm', 'md'];
    case 'md':
      return ['md', 'lg'];
    case 'lg':
      return ['lg', 'xl'];
    case 'xl':
      return ['xl'];
    //
    case 'lt-sm':
      return [undefined, 'xs'];
    case 'lt-md':
      return [undefined, 'sm'];
    case 'lt-lg':
      return [undefined, 'lg'];
    case 'lt-xl':
      return [undefined, 'xl'];
    //
    case 'gt-xs':
      return ['xs', undefined];
    case 'gt-sm':
      return ['sm', undefined];
    case 'gt-md':
      return ['md', undefined];
    case 'gt-lg':
      return ['lg', undefined];
    default: {
      console.log(`this flexLayoutAlias=${flexLayoutAlias} is wrong`);
      return [undefined, undefined];
    }
  }
};

const replaceAll = (value, match, replace) => value.split(match).join(replace);

const preProcessingHtml = (htmlValue) => {
  let htmlValueOut = htmlValue;

  htmlValueOut = replaceAll(htmlValueOut, '[fxFlexOrder.xs]', 'fxFlexOrder.xs');

  return htmlValueOut;
};

const postProcessingHtml = (htmlValue) => {
  let htmlValueOut = htmlValue;

  htmlValueOut = replaceAll(htmlValueOut, '></img>', '/>');
  htmlValueOut = replaceAll(htmlValueOut, '></input>', '/>');
  htmlValueOut = replaceAll(htmlValueOut, '></br>', '/>');
  htmlValueOut = replaceAll(htmlValueOut, '=""', '');
  htmlValueOut = replaceAll(htmlValueOut, '&amp;nbsp;', '&nbsp;');
  htmlValueOut = replaceAll(htmlValueOut, '&amp;&amp;', '&&');

  return htmlValueOut;
};

// ------------------transformFile---------------------------

function transformFile(htmlFilename) {
  let htmlContent = fs.readFileSync(htmlFilename, 'utf8');

  htmlContent = preProcessingHtml(htmlContent);

  const sccsFilename = getSccFilename(htmlFilename);
  let scssContent = fs.readFileSync(sccsFilename, 'utf8');

  const cheerioApi = cheerio.load(
    htmlContent,
    {
      xmlMode: true,
    },
    false,
  );

  const addUniqueClass = (element, className) => {
    if (className && !element.hasClass(className)) {
      element.addClass(className);
    }
  };

  //-----------------fxLayout-------------------------------

  ['', ...flexlayoutBreakPoints].forEach((breakpoint) => {
    const attr = 'fxLayout';
    const apiSeletor = getCheerioApiSelector(attr, breakpoint);
    const attrSelector = getAttrSelector(attr, breakpoint);

    cheerioApi(apiSeletor).each(function () {
      const value = cheerioApi(this).attr(attrSelector);
      cheerioApi(this).removeAttr(attrSelector);

      const [min, max] = getBreakPoint(breakpoint);

      addUniqueClass(cheerioApi(this), classUtils['d-flex'](min));
      addUniqueClass(cheerioApi(this), classUtils['d-flex'](max));

      if (value === 'column') {
        addUniqueClass(cheerioApi(this), classUtils['flex-column'](min));
        addUniqueClass(cheerioApi(this), classUtils['flex-column'](max));
      }
    });
  });

  //-----------------fxLayoutAlign-------------------------------

  ['', ...flexlayoutBreakPoints].forEach((breakpoint) => {
    const attr = 'fxLayoutAlign';
    const apiSeletor = getCheerioApiSelector(attr, breakpoint);
    const attrSelector = getAttrSelector(attr, breakpoint);

    cheerioApi(apiSeletor).each(function () {
      const value = cheerioApi(this).attr(attrSelector);
      cheerioApi(this).removeAttr(attrSelector);

      const [min, max] = getBreakPoint(breakpoint);

      const [mainAxisPos, crossAxisPos] = value.split(' ');

      addUniqueClass(cheerioApi(this), classUtils['d-flex'](min));
      addUniqueClass(cheerioApi(this), classUtils['d-flex'](max));

      addUniqueClass(cheerioApi(this), classUtils['justify-content'](mainAxisPos, min));
      addUniqueClass(cheerioApi(this), classUtils['justify-content'](mainAxisPos, max));

      addUniqueClass(cheerioApi(this), classUtils['align-items'](crossAxisPos, min));
      addUniqueClass(cheerioApi(this), classUtils['align-items'](crossAxisPos, max));
    });
  });

  //-----------------fxFlex-------------------------------

  ['', ...flexlayoutBreakPoints].forEach((breakpoint) => {
    const attr = 'fxFlex';
    const apiSeletor = getCheerioApiSelector(attr, breakpoint);
    const attrSelector = getAttrSelector(attr, breakpoint);

    cheerioApi(apiSeletor).each(function () {
      const value = cheerioApi(this).attr(attrSelector);
      cheerioApi(this).removeAttr(attrSelector);

      const className = `transpilerClass-${attr}-${v4().slice(0, 6)}`;

      const [value1, value2, value3] = value.split(' ');
      let grow = 1;
      let shrink = 1;
      let basis = 0;

      if (value1 && !value2 && !value3) {
        basis = value1;
      }
      if (value1 && value2 && value3) {
        grow = value1;
        shrink = value2;
        basis = value3;
      }

      scssContent = classUtils.addClassToScss(
        scssContent,
        {
          [breakpoint]: [`flex:${grow} ${shrink} ${isNumber(basis) ? `${basis}%` : basis}`],
        },
        className,
      );

      addUniqueClass(cheerioApi(this), className);
    });
  });

  //-----------------fxLayoutGap-------------------------------

  ['', ...flexlayoutBreakPoints].forEach((breakpoint) => {
    const attr = 'fxLayoutGap';
    const apiSeletor = getCheerioApiSelector(attr, breakpoint);
    const attrSelector = getAttrSelector(attr, breakpoint);

    cheerioApi(apiSeletor).each(function () {
      const value = cheerioApi(this).attr(attrSelector);
      cheerioApi(this).removeAttr(attrSelector);

      if (value.includes('gappx')) {
        console.log(`the gap value ${value} is weird `);
        return;
      }

      const className = `transpilerClass-${attr}-${v4().slice(0, 6)}`;
      const [gapValue, grid] = value.split(' ');

      scssContent = classUtils.addClassToScss(
        scssContent,
        {
          [breakpoint]: [grid === 'grid' ? `grid-gap: ${gapValue}` : `gap: ${gapValue}`],
        },
        className,
      );

      addUniqueClass(cheerioApi(this), className);
    });
  });

  //-----------------fxShow-------------------------------

  ['', ...flexlayoutBreakPoints].forEach((breakpoint) => {
    const attr = 'fxShow';
    const apiSeletor = getCheerioApiSelector(attr, breakpoint);
    const attrSelector = getAttrSelector(attr, breakpoint);

    cheerioApi(apiSeletor).each(function () {
      const value = cheerioApi(this).attr(attrSelector);
      cheerioApi(this).removeAttr(attrSelector);

      const hide = value === 'false';
      const isBlock = getIsBlockElement(cheerioApi(this));

      const handleClass = hide ? DNoneHandle : isBlock ? DBlockHandle : DInlineHandle; // some times, can have conflicts with d-flex

      const [min, max] = getBreakPoint(breakpoint);

      ((breakpoint && min) || !breakpoint) && addUniqueClass(cheerioApi(this), handleClass(min));
      ((breakpoint && max) || !breakpoint) && addUniqueClass(cheerioApi(this), handleClass(max));
    });
  });

  //-----------------fxHide-------------------------------

  ['', ...flexlayoutBreakPoints].forEach((breakpoint) => {
    const attr = 'fxHide';
    const apiSeletor = getCheerioApiSelector(attr, breakpoint);
    const attrSelector = getAttrSelector(attr, breakpoint);

    cheerioApi(apiSeletor).each(function () {
      const value = cheerioApi(this).attr(attrSelector);
      cheerioApi(this).removeAttr(attrSelector);

      const show = value === 'false';
      const isBlock = getIsBlockElement(cheerioApi(this));

      const handleClass = !show ? DNoneHandle : isBlock ? DBlockHandle : DInlineHandle; // some times, can have conflicts with d-flex

      const [min, max] = getBreakPoint(breakpoint);

      ((breakpoint && min) || !breakpoint) && addUniqueClass(cheerioApi(this), handleClass(min));
      ((breakpoint && max) || !breakpoint) && addUniqueClass(cheerioApi(this), handleClass(max));
    });
  });

  //-----------------fxFlexOrder-------------------------------

  ['', ...flexlayoutBreakPoints].forEach((breakpoint) => {
    const attr = 'fxFlexOrder';
    let apiSeletor = getCheerioApiSelector(attr, breakpoint);
    let attrSelector = getAttrSelector(attr, breakpoint);

    cheerioApi(apiSeletor).each(function () {
      const value = cheerioApi(this).attr(attrSelector);
      cheerioApi(this).removeAttr(attrSelector);

      const [min, max] = getBreakPoint(breakpoint);

      addUniqueClass(cheerioApi(this), OrderHandle(value, min));
      addUniqueClass(cheerioApi(this), OrderHandle(value, max));
    });
  });
  //-----------------OUTPUTR-------------------------------

  let transformedContent = cheerioApi.html({ xmlMode: false });
  transformedContent = postProcessingHtml(transformedContent);

  fs.writeFileSync(htmlFilename, transformedContent, 'utf8');
  fs.writeFileSync(sccsFilename, scssContent, 'utf8');
}

function getFiles(path, files = []) {
  const stats = fs.statSync(path);

  if (stats.isFile()) {
    files.push(path);
  }

  if (stats.isDirectory()) {
    const fileList = fs.readdirSync(path);
    for (const file of fileList) {
      getFiles(`${path}/${file}`, files);
    }
  }

  return files;
}

const [, , relativePath] = process.argv;

const allFilenames = getFiles(relativePath);

const htmlFilenames = allFilenames.filter((file) => file.endsWith('.html'));

htmlFilenames.forEach((htmlFilename) => {
  transformFile(htmlFilename);
  exec(`node ./node_modules/.bin/prettier --write ${htmlFilename}`);
  exec(`node ./node_modules/.bin/prettier --write ${getSccFilename(htmlFilename)}`);
});
