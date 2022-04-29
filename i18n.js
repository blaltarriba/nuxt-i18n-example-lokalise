import I18n from 'react-native-i18n';

import en_US from './lang/en_US/en_US-owner/en_US-newfile.js'
import fr_FR from './lang/fr_FR/fr_FR-owner/fr_FR-newfile.js'
import es_ES from './lang/es_ES/es_ES-owner/es_ES-newfile.js'

I18n.fallbacks = true;

I18n.translations = {
    en_US,
    fr_FR,
    es_ES
};

export default I18n;