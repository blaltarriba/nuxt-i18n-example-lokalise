import I18n from 'react-native-i18n';

import en_US from './lang/en_US/en_US.js'
import fr_FR from './lang/fr_FR/fr_FR.js'
import es_ES from './lang/es_ES/es_ES.js'

I18n.fallbacks = true;

I18n.translations = {
    en_US,
    fr_FR,
    es_ES
};

export default I18n;