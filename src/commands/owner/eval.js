/* eslint-disable require-await */
const { Command } = require('discord-akairo');
const { Util, MessageEmbed } = require('discord.js');
const util = require('util');
const NL = '!!NL!!';
const NL_PATTERN = new RegExp(NL, 'g');

class EvalCommand extends Command {
	constructor() {
		super('eval', {
			aliases: ['eval', 'e'],
			category: 'owner',
			ownerOnly: true,
			quoted: false,
			args: [
				{
					id: 'code',
					match: 'content',
					type: 'string',
					prompt: {
						start: 'what would you like to evaluate?'
					}
				}
			],
			description: {
				content: 'Evaluates code.',
				usage: '<code>'
			}
		});
	}

	async exec(message, { code }) {
		let hrDiff;
		try {
			const hrStart = process.hrtime();
			// eslint-disable-next-line no-eval
			this.lastResult = eval(code);
			hrDiff = process.hrtime(hrStart);
		} catch (error) {
			return message.util.send(`*Error while evaluating:* \`${error}\``);
		}

		this.hrStart = process.hrtime();
		const result = this._result(this.lastResult, hrDiff, code);
		if (Array.isArray(result)) return result.map(async res => message.util.send(res));
		return message.util.send(result);
	}

	_result(result, hrDiff, input) {
		const inspected = util.inspect(result, { depth: 0 }).replace(NL_PATTERN, '\n').replace(this.sensitivePattern, '--🙄--');

		const split = inspected.split('\n');
		const last = inspected.length - 1;
		const prependPart = inspected[0] !== '{' && inspected[0] !== '[' && inspected[0] !== '\'' ? split[0] : inspected[0];
		const appendPart = inspected[last] !== '}' && inspected[last] !== ']' && inspected[last] !== '\'' ? split[split.length - 1] : inspected[last];
		const prepend = `\`\`\`javascript\n${prependPart}\n`;
		const append = `\n${appendPart}\n\`\`\``;
		if (input) {
			return Util.splitMessage(`*Executed in ${hrDiff[0] > 0 ? `${hrDiff[0]}s ` : ''}${hrDiff[1] / 1000000}ms* \`\`\`javascript\n${inspected}\`\`\``, { maxLength: 1900, prepend, append });
		}
		return Util.splitMessage(`*Callback executed after ${hrDiff[0] > 0 ? `${hrDiff[0]}s ` : ''}${hrDiff[1] / 1000000}ms* \`\`\`javascript\n${inspected}\`\`\``, { maxLength: 1900, prepend, append });
	}

	get sensitivePattern() {
		if (!this._sensitivePattern) {
			const token = this.client.token.split('').join('[^]{0,2}');
			const revToken = this.client.token.split('').reverse().join('[^]{0,2}');
			Object.defineProperty(this, '_sensitivePattern', { value: new RegExp(`${token}|${revToken}`, 'g') });
		}
		return this._sensitivePattern;
	}
}

module.exports = EvalCommand;
