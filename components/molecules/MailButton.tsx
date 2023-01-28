'use client';
import { Button } from '../atoms/Button';
import { LetterIcon } from '../../assets/svg';

export function MailButton() {
    return (
        <Button Icon={LetterIcon} onClick="mailto:info@kids-im-wald.de">
            Kontakt aufnehmen
        </Button>
    );
}
