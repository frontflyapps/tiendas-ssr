(function (n) {
  const o = (n['gu'] = n['gu'] || {});
  o.dictionary = Object.assign(o.dictionary || {}, {
    'Block quote': ' વિચાર ટાંકો',
    Bold: 'ઘાટુ - બોલ્ડ્',
    Code: '',
    Italic: 'ત્રાંસુ - ઇટલિક્',
    Underline: 'નીચે લિટી - અન્ડરલાઇન્',
  });
  o.getPluralForm = function (n) {
    return n != 1;
  };
})(window.CKEDITOR_TRANSLATIONS || (window.CKEDITOR_TRANSLATIONS = {}));
