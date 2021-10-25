#  Copyright (c) 2021 CZ.NIC z.s.p.o. (https://www.nic.cz/)
#
#  This is free software, licensed under the GNU General Public License v3.
#  See /LICENSE for more information.

.PHONY: all extract-translations update-translations compile-translations translations

all:
	@echo "make extract-translations"
	@echo "    Extract translations to translations.pot file."
	@echo "make update-translations"
	@echo "    Update existing po files. Add/remove new translations."
	@echo "make compile-translations"
	@echo "    Parse and output .po files as loadable JSONs."
	@echo "make translations"
	@echo "    Extract, update & parse translations."

# Internalization & translations
# Details: https://github.com/ttag-org/ttag & https://github.com/ttag-org/ttag-cli
# Workflow: extract -> update -> compile
extract-translations:
	npx ttag extract -o i18n/translations.pot src/

update-translations:
	for pofile in i18n/*.po ; do \
		npx ttag update $${pofile} src/ ;\
	done

compile-translations:
	for pofile in i18n/*.po ; do \
		npx ttag po2json $${pofile} > $${pofile}.json ;\
	done

translations: extract-translations update-translations compile-translations