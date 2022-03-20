﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SuchByte.MacroDeck.JSON
{
    public enum JsonMethod
    {
        CONNECTED,
        BUTTON_PRESS,
        BUTTON_RELEASE,
        BUTTON_LONG_PRESS,
        BUTTON_LONG_PRESS_RELEASE,
        GET_BUTTONS,
        GET_ICONS,
        UPDATE_BUTTON,
        UPDATE_LABEL,
        ICON_BASE64,
        GET_CONFIG,
        BUTTON_DONE,
        GET_INSTALLED_PLUGINS,
        GET_INSTALLED_ICON_PACKS,
    }
}
