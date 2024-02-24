const {
    native
} = window.enmity;

function reload() {
    native.reload()
}
native.version, native.build, native.device, native.version;

function set(t, o, n) {
    window.enmity.settings.set(t, o, n)
}

function get(t, o, n) {
    return window.enmity.settings.get(t, o, n)
}

function registerPlugin(t) {
    window.enmity.plugins.registerPlugin(t)
}
const Constants = window.enmity.modules.common.Constants;
window.enmity.modules.common.Clipboard, window.enmity.modules.common.Assets, window.enmity.modules.common.Messages, window.enmity.modules.common.Clyde, window.enmity.modules.common.Avatars, window.enmity.modules.common.Native;
const React = window.enmity.modules.common.React;
window.enmity.modules.common.Dispatcher, window.enmity.modules.common.Storage;
const Toasts = window.enmity.modules.common.Toasts,
    Dialog = window.enmity.modules.common.Dialog;
window.enmity.modules.common.Token, window.enmity.modules.common.REST, window.enmity.modules.common.Settings, window.enmity.modules.common.Users, window.enmity.modules.common.Navigation, window.enmity.modules.common.NavigationNative, window.enmity.modules.common.NavigationStack, window.enmity.modules.common.Theme, window.enmity.modules.common.Linking;
const StyleSheet = window.enmity.modules.common.StyleSheet;
window.enmity.modules.common.ColorMap, window.enmity.modules.common.Components, window.enmity.modules.common.Locale, window.enmity.modules.common.Profiles, window.enmity.modules.common.Lodash, window.enmity.modules.common.Logger, window.enmity.modules.common.Flux, window.enmity.modules.common.SVG, window.enmity.modules.common.Scenes, window.enmity.modules.common.Moment;
var name = "VendettaCompat",
    version = "1.0.2",
    description = "vendetta hehe :3",
    authors = [{
        name: "Rosie<3",
        id: "581573474296791211"
    }],
    color = "#FFFFFF",
    Manifest = {
        name,
        version,
        description,
        authors,
        color
    };

function getIDByName(t) {
    return window.enmity.assets.getIDByName(t)
}
var locale = {
    errors: {
        unload: ["Erdetta whedetta trydetta todetta unlodetta Vendetta", "Error when trying to unload Vendetta"]
    },
    settings: {
        strangeWording: {
            title: ["Stradetta wordetta", "Strange wording"],
            description: ["Madetta Vendetta usedetta strandetta wordetta fordetta alldetta ofdetta itsdetta texdetta", "Make Vendetta use strange wording for all of its text"]
        },
        customVendettaURL: {
            title: ["Custometta Vendetta URLDetta", "Custom Vendetta URL"],
            description: ["Loadetta Vendetta fromdetta adetta custometta endpointdetta", "Loads Vendetta from a custom endpoint"],
            input: ["Vendetta URLDetta", "Vendetta URL"]
        },
        clearOptions: {
            title: ["Cledetta Stodettas", "Clear Stores"],
            description: ["Cleardetta enadetta dialodetta, strandetta wordetta optiodettas andetta cachdetta codetta.", "Clear enable dialog, strange word options and cached code."]
        },
        reload: {
            title: ["Reloadetta", "Reload"],
            description: ["Reloadetta Discordetta todetta applydetta andetta chadettas.", "Reload Discord to apply any changes."]
        },
        info: () => [`Versiodetta ${Manifest.version} bydetta ${Manifest.authors.map(t=>t.name).join(", ")}`, `Version ${Manifest.version} by ${Manifest.authors.map(t=>t.name).join(", ")}`]
    },
    dialogs: {
        enabled: {
            title: ["Enabledetta Vendetta", "Enabled Vendetta"],
            description: ["Successdetta enadetta Vendetta. Todetta disadetta itdetta, jusdetta disadetta thedetta plugidetta.", "Successfully enabled Vendetta. To disable it, just disable the plugin."],
            okayText: ["Okdetta", "Okay"]
        },
        unload: {
            title: ["Mustdetta reloadetta", "Must reload"],
            description: ["Todetta fullydetta disadetta Vendetta, youdetta needetta todetta reloadetta youdetta Discordetta. Pledetta nodetta thadetta Vendetta widetta nodetta wordetta untidetta youdetta reloadetta youdetta Discordetta.", "To fully disable Vendetta, you need to reload your Discord. Please note that Vendetta will not work until you reload Discord."],
            okayText: ["Reloadetta", "Reload"],
            cancelText: ["Ladetta", "Later"]
        }
    },
    toasts: {
        clear: ["Successdetta cleardetta alldetta stodetted dadetta.", "Successfully cleared all stored data."],
        strangeText: t => [`Successdetta ${t} Strangdetta Wordetta.`, `Successfully ${t} Strange Words.`],
        icons: {
            success: getIDByName("ic_check_18px")
        }
    }
};
const {
    components
} = window.enmity;
components.Alert, components.Button, components.FlatList, components.Image, components.ImageBackground, components.KeyboardAvoidingView, components.Modal, components.Pressable, components.RefreshControl, components.ScrollView, components.SectionList, components.StatusBar, components.StyleSheet, components.Switch, components.Text, components.TextInput, components.TouchableHighlight, components.TouchableOpacity, components.TouchableWithoutFeedback, components.Touchable, components.View, components.VirtualizedList, components.Form, components.FormArrow, components.FormCTA, components.FormCTAButton, components.FormCardSection, components.FormCheckbox;
const FormDivider = components.FormDivider;
components.FormHint, components.FormIcon;
const FormInput = components.FormInput;
components.FormLabel, components.FormRadio;
const FormRow = components.FormRow,
    FormSection = components.FormSection;
components.FormSelect, components.FormSubLabel;
const FormSwitch = components.FormSwitch;
components.FormTernaryCheckBox;
const FormText = components.FormText;
components.FormTextColors, components.FormTextSizes;
var Settings = ({
    Manifest: t
}) => {
    const [o, n] = React.useState(get(t.name, "strangeCode", 0)), [l, i] = React.useState(get(t.name, "customVendettaURL", {
        enabled: !1,
        url: "http://localhost:4040/vendetta.js"
    })), s = StyleSheet.createThemedStyleSheet({
        icon: {
            color: Constants.ThemeColorMap.INTERACTIVE_NORMAL
        },
        info: {
            color: StyleSheet.ThemeColorMap.HEADER_PRIMARY,
            fontFamily: Constants.Fonts.DISPLAY_BOLD,
            textAlign: "center",
            fontSize: 14,
            marginTop: 10
        }
    });
    return React.createElement(React.Fragment, null, React.createElement(FormSection, {
        title: locale.settings.strangeWording.title[o]
    }, React.createElement(FormRow, {
        label: locale.settings.strangeWording.title[o],
        subLabel: locale.settings.strangeWording.description[o],
        leading: React.createElement(FormRow.Icon, {
            style: s.icon,
            source: getIDByName("ic_locale_24px")
        }),
        trailing: React.createElement(FormSwitch, {
            value: get(t.name, "strangeCode", 0) == 0,
            onValueChange: () => {
                n(a => a == 0 ? 1 : 0), set(t.name, "strangeCode", get(t.name, "strangeCode", 0) == 0 ? 1 : 0), Toasts.open({
                    content: locale.toasts.strangeText(get(t.name, "strangeCode", 0) == 0 ? "Enabled" : "Disabledetta")[o],
                    source: locale.toasts.icons.success
                })
            }
        })
    }), React.createElement(FormRow, {
        label: locale.settings.customVendettaURL.title[o],
        subLabel: locale.settings.customVendettaURL.description[o],
        leading: React.createElement(FormRow.Icon, {
            style: s.icon,
            source: getIDByName("ic_locale_24px")
        }),
        trailing: React.createElement(FormSwitch, {
            value: l.enabled,
            onValueChange: () => i(a => (set(t.name, "customVendettaURL", {
                enabled: !0,
                url: a.url
            }), {
                enabled: !0,
                url: a.url
            }))
        })
    }), l.enabled && React.createElement(FormInput, {
        value: l.url,
        onChangeText: a => i(d => (set(t.name, "customVendettaURL", {
            enabled: d.enabled,
            url: a
        }), {
            enabled: d.enabled,
            url: a
        })),
        placeholder: "http://localhost:4040/vendetta.js",
        title: locale.settings.customVendettaURL.input[o]
    })), React.createElement(FormDivider, null), React.createElement(FormSection, {
        title: locale.settings.clearOptions.title[o]
    }, React.createElement(FormRow, {
        label: locale.settings.clearOptions.title[o],
        subLabel: locale.settings.clearOptions.description[o],
        leading: React.createElement(FormRow.Icon, {
            style: s.icon,
            source: getIDByName("ic_message_delete")
        }),
        trailing: () => React.createElement(FormRow.Arrow, null),
        onPress: () => {
            set(t.name, "shownEnabledDialog", !1), set(t.name, "strangeCode", 0), n(0), Toasts.open({
                content: locale.toasts.clear[o],
                source: locale.toasts.icons.success
            })
        }
    })), React.createElement(FormDivider, null), React.createElement(FormSection, {
        title: locale.settings.reload.title[o]
    }, React.createElement(FormRow, {
        label: locale.settings.reload.title[o],
        subLabel: locale.settings.reload.description[o],
        leading: React.createElement(FormRow.Icon, {
            style: s.icon,
            source: getIDByName("ic_message_retry")
        }),
        trailing: () => React.createElement(FormRow.Arrow, null),
        onPress: () => reload()
    })), React.createElement(FormDivider, null), React.createElement(FormText, {
        style: s.info
    }, locale.settings.info()[o]))
};
const VendettaCompat = {
    ...Manifest,
    async onStart() {
        var e;
        const isStrange = (e = get(Manifest.name, "strangeCode", 0)) != null ? e : 0,
            showSuccessDialog = () => {
                get(Manifest.name, "shownEnabledDialog", !1) || Dialog.show({
                    title: locale.dialogs.enabled.title[isStrange],
                    body: locale.dialogs.enabled.description[isStrange],
                    confirmText: locale.dialogs.enabled.okayText[isStrange],
                    onConfirm: () => set(Manifest.name, "shownEnabledDialog", !0)
                })
            },
            customVendettaURL = get(Manifest.name, "customVendettaURL"),
            url = customVendettaURL != null && customVendettaURL.enabled ? customVendettaURL.url : "https://raw.githubusercontent.com/vendetta-mod/builds/master/vendetta.js",
            res = await fetch(url),
            vendettaCode = res.ok ? await res.text() : get(Manifest.name, "vendettaCode", null);
        set(Manifest.name, "vendettaCode", vendettaCode), eval(vendettaCode), showSuccessDialog()
    },
    onStop() {
        const t = get(Manifest.name, "strangeCode", 0),
            o = window.vendetta;
        if (o) try {
            o == null || o.unload(), Dialog.show({
                title: locale.dialogs.unload.title[t],
                body: locale.dialogs.unload.description[t],
                confirmText: locale.dialogs.unload.okayText[t],
                cancelText: locale.dialogs.unload.cancelText[t],
                onConfirm: () => reload()
            })
        } catch (n) {
            console.error(`[${Manifest.name}] ${locale.errors.unload[t]}: ${n}`)
        }
    },
    getSettingsPanel() {
        return React.createElement(Settings, {
            Manifest
        })
    }
};
registerPlugin(VendettaCompat);
